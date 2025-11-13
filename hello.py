def hello_world():
    """A simple hello world function"""
    print("Hello, World!")
    return "Hello, World!"

class GreetingManager:
    def __init__(self):
        self.greetings = []
    
    def add_greeting(self, greeting):
        self.greetings.append(greeting)
    
    def get_all_greetings(self):
        return self.greetings

if __name__ == "__main__":
    hello_world()
