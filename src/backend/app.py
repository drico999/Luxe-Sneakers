# app.py
from dotenv import load_dotenv
from pathlib import Path

# Build an absolute path to the .env file and load it
dotenv_path = Path(__file__).resolve().parent.parent.parent / '.env'
load_dotenv(dotenv_path=dotenv_path)

from flask import Flask, request, jsonify
from flask_cors import CORS
from ikh_pay import create_payment
from supabase_client import insert_order, update_order_status
from email_notification import send_email
import uuid

app = Flask(__name__)
# More permissive CORS for debugging. This allows all origins.
CORS(app)

STORE_OWNER_EMAIL = "info@luxesneakers.co.za"

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

@app.route("/api/contact", methods=["POST", "OPTIONS"])
def handle_contact():
    if request.method == "OPTIONS":
        return jsonify({"status": "ok"}), 200
        
    print("--- Contact form endpoint hit ---")
    data = request.json
    print(f"Received data: {data}")
    name = data.get("name")
    from_email = data.get("email")
    subject = data.get("subject", "No Subject")
    message = data.get("message")

    if not name or not from_email or not message:
        return jsonify({"error": "Missing required fields"}), 400

    email_body = f"""
    You have a new contact form submission:

    Name: {name}
    Email: {from_email}
    Subject: {subject}npm run dev

    Message:
    {message}
    """

    try:
        send_email(f"New Contact Form Submission: {subject}", email_body, STORE_OWNER_EMAIL)
        return jsonify({"message": "Message sent successfully"}), 200
    except Exception as e:
        print(e) # For debugging
        return jsonify({"error": "Failed to send email"}), 500

if __name__ == "__main__":
    app.run(debug=True)