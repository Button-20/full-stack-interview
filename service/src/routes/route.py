from fastapi import APIRouter
from ..models.todos import Todo
from ..config.database import collection_name
from ..schema.schema import list_serialize
from bson import ObjectId


router = APIRouter()

# GET Request Method
@router.get("/todos")
async def get_todos():
    todos = list_serialize(collection_name.find())
    return {"todos": todos} 


# POST Request Method
@router.post("/todos")
async def add_todo(todo: Todo):
    todo_dict = todo.dict()
    result = collection_name.insert_one(todo_dict)
    return {"id": str(result.inserted_id)}


# PUT Request Method
@router.put("/todos/{id}")
async def update_todo(id: str, todo: Todo):
    todo_id = ObjectId(id)
    result = collection_name.update_one(
        {"_id": todo_id}, {"$set": todo.dict(exclude_unset=True)}
    )
    return {"updated": result.matched_count}    

# DELETE Request Method
@router.delete("/todos/{id}")
async def delete_todo(id: str):
    todo_id = ObjectId(id)
    result = collection_name.delete_one({"_id": todo_id})
    return {"deleted": result.deleted_count}