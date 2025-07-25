# supabase_client.py
from supabase import create_client, Client
import os

SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_SERVICE_KEY = os.getenv("SUPABASE_SERVICE_KEY")

supabase: Client = create_client(SUPABASE_URL, SUPABASE_SERVICE_KEY)

def insert_order(order_data):
    response = supabase.table("orders").insert(order_data).execute()
    return response.data

def update_order_status(order_id, status):
    response = (
        supabase.table("orders")
        .update({"status": status})
        .eq("id", order_id)
        .execute()
    )
    return response.data

def get_order(order_id):
    response = supabase.table("orders").select("*").eq("id", order_id).single().execute()
    return response.data
