from pymongo import MongoClient

client = MongoClient("mongodb://192.168.48.249:27017/")

db = client["ticketing"]

collection_name = db["tickets"]