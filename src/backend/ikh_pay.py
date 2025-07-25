# ikh_pay.py
import requests
import os

IKH_API_KEY = os.getenv("IKH_PAY_API_KEY")
IKH_API_URL = "https://api.ikhokha.com/v1/payments"

headers = {
    "Authorization": f"Bearer {IKH_API_KEY}",
    "Content-Type": "application/json"
}

def create_payment(amount, customer_email, redirect_url, reference):
    payload = {
        "amount": amount,
        "currency": "ZAR",
        "customer": {
            "email": customer_email
        },
        "redirect_url": redirect_url,
        "reference": reference
    }

    response = requests.post(IKH_API_URL, json=payload, headers=headers)
    response.raise_for_status()
    return response.json()
