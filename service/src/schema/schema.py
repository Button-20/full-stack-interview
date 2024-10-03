def serialize(obj) -> dict:
    return {
        'id': str(obj["_id"]),
        'title': obj["title"],
        'description': obj["description"],
        'estimated_time': obj["estimated_time"]

    }

def list_serialize(objs) -> list:
    return [serialize(obj) for obj in objs]