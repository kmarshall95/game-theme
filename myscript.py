import os

class ChatGPT:
    def __init__(self):
        self.conversation = []

    def respond(self, message):
        response = self.generate_response(message)
        self.conversation.append({'user': message, 'assistant': response})
        return response

    def generate_response(self, message):
        # Replace this method with actual GPT-4 API call to get a response
        return f"Sample response to '{message}'"

def main():
    chatbot = ChatGPT()
    print("Welcome to ChatGPT! Type 'quit' to exit or 'export' to save the conversation.")

    while True:
        user_input = input("You: ")
        if user_input.lower() == 'quit':
            break
        elif user_input.lower() == 'export':
            export_conversation(chatbot.conversation)
        else:
            response = chatbot.respond(user_input)
            print(f"ChatGPT: {response}")

def export_conversation(conversation, filename='conversation.txt'):
    with open(filename, 'w', encoding='utf-8') as file:
        for entry in conversation:
            file.write(f"You: {entry['user']}\n")
            file.write(f"ChatGPT: {entry['assistant']}\n")

    print(f"Conversation exported to {filename}")

if __name__ == "__main__":
    main()
