import mysql.connector


print("Example Client")

mydb = mysql.connector.connect(
  host="127.0.0.1",
  user="root",
  passwd=""
)

def setValue(key, value):
    #mydb.querry() 
    #