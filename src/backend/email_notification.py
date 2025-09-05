import os
import smtplib
from email.mime.text import MIMEText
from dotenv import load_dotenv
from pathlib import Path

# Build an absolute path to the .env file and load it
# This makes sure the script can find the .env file no matter where it's run from
dotenv_path = Path(__file__).resolve().parent.parent.parent / '.env'
load_dotenv(dotenv_path=dotenv_path)

def send_email(subject, message, to_email, from_email=None):
    smtp_host = os.getenv("SMTP_HOST")
    smtp_port = int(os.getenv("SMTP_PORT", 465))
    smtp_user = os.getenv("SMTP_USER")
    smtp_password = os.getenv("SMTP_PASSWORD")

    msg = MIMEText(message)
    msg["Subject"] = subject
    msg["From"] = from_email if from_email else smtp_user
    msg["To"] = to_email
    
    try:
        print(f"Attempting to connect to {smtp_host} on port {smtp_port}...")
        with smtplib.SMTP_SSL(smtp_host, smtp_port, timeout=10) as smtp:
            print("Connection successful. Logging in...")
            smtp.login(smtp_user, smtp_password)
            print("Login successful. Sending email...")
            smtp.send_message(msg)
            print("Email sent successfully!")
    except Exception as e:
        print(f"--- DETAILED ERROR ---")
        print(f"Failed to send email. The error is: {e}")
        print(f"Error Type: {type(e)}")
        print(f"----------------------")

if __name__ == "__main__":
    # This test will now use the Truehost settings from your .env file
    send_email("Test from Truehost", "This is a test using Truehost SMTP.", "info@luxesneakers.co.za")