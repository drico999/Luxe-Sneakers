# app.py
from flask import Flask, request, jsonify
from ikh_pay import create_payment
from supabase_client import insert_order, update_order_status
from email_notification import send_email
import uuid

app = Flask(__name__)

STORE_OWNER_EMAIL = "yourstore@example.com"  # Change to your actual email

@app.route("/api/create-payment", methods=["POST"])
def create_payment_endpoint():
    data = request.json
    order_id = str(uuid.uuid4())

    # Save order to Supabase
    insert_order({
        "id": order_id,
        "items": data["items"],
        "total": data["total"],
        "email": data["email"],
        "status": "pending",
        "delivery_method": data.get("delivery_method", "unknown")
    })

    payment = create_payment(
        amount=data["total"],
        customer_email=data["email"],
        redirect_url=f"https://yourdomain.com/order-success?order_id={order_id}",
        reference=order_id
    )

    return jsonify({"payment_url": payment["checkout_url"]})

@app.route("/api/payment-webhook", methods=["POST"])
def webhook():
    data = request.json
    order_id = data.get("reference")
    status = data.get("status")

    if order_id and status == "successful":
        update_order_status(order_id, "paid")

        # Send email to store owner and customer
        order = data.get("metadata", {})
        customer_email = order.get("email")
        message = f"New paid order received. Order ID: {order_id}"

        send_email("New Order Received", message, STORE_OWNER_EMAIL)
        if customer_email:
            send_email("Order Confirmation", f"Your order {order_id} was successful.", customer_email)

    return ("", 200)

if __name__ == "__main__":
    app.run(debug=True)
