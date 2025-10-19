FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
EXPOSE 443
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "443", \
    "--ssl-keyfile", "certs/privkey.pem", "--ssl-certfile", "certs/fullchain.pem"]
