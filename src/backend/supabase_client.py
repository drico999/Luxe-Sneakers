import os
from dotenv import load_dotenv
from supabase import create_client, Client
from pathlib import Path

# Build an absolute path to the .env file and load it
dotenv_path = Path(__file__).resolve().parent.parent.parent / '.env'
load_dotenv(dotenv_path=dotenv_path)

SUPABASE_URL = os.environ.get("SUPABASE_URL")
SUPABASE_SERVICE_KEY = os.environ.get("SUPABASE_KEY")
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