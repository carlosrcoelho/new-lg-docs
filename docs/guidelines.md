# Guidelines

## Component

Components provide a convenient and straightforward way to work with language models.

For example, component agents can refer to an entity capable of performing actions or making decisions autonomously or on behalf of someone or something else. 

Learn more about the components and how they work in the LangChain [documentation](https://docs.langchain.com/docs/category/components) section.

---

## Component's Features

During the flow creation process, you will notice a colored circle next to the component. For example, if you select `ConversationChain` you will see an orange <span style={{color: 'orange'}}>o</span> and purple <span style={{color: 'purple'}}>o</span> circles. It means that this component accepts that type of connection.

![Single Compenent](img/single-compenent.png)



Components marked with a red asterisk <span style={{color: 'red'}}>*</span> means that you must connect another component to make it work. If you don't, the icon ball close to the trash can icon 🗑️ will keep red. Make the necessary connections to make your flow work, and the icon ball will become green. Hovering over the small circle will reveal the component that needs to be connected.

In some components, at the top of it, you will see a small gear icon ⚙️, which you can click to edit the parameters. You also have the option to delete it by clicking the trash can icon 🗑️.



---

## Features

In the top right corner of the screen, there are some features that you can use, such as **Code**, **Import**, **Export**, **Dark Mode**, and **Notification**, as you can see in the image below:

![Feature](img/features.png)

Further down, we will explain each of these features.

---

### Code

The API Access feature allows you to export your flow from the platform and utilize it with your own code. You can use "Python API"  and "Python Code" as follow.


**Python API Tab:**

The code snippet is a Python script that makes a POST request to a local API endpoint to get a prediction based on a message input.

```bash
import requests
import json

API_URL = "http://localhost:3000/predict"

def predict(message):
    with open("New Flow.json", "r") as f:
        json_data = json.load(f)
    payload = {'exported_flow': json_data, 'message': message}
    response = requests.post(API_URL, json=payload)
    return response.json() # JSON {"result": "Response"}

print(predict("Your message"))
```

**Python Code Tab:**

You can load a flow from a JSON file and then applying the loaded flow to a given input text.

```bash
from langflow import load_flow_from_json

flow = load_flow_from_json("New Flow.json")
# Now you can use it like any chain
flow("Hey, have you heard of LangFlow?")
```

---

### Import and Export

Flows can be exported and imported as JSON files. We already have some examples on the **Import** option. Check them out.

The **Export** option allows you to export your created flow. Then you can set a name and description to it. You can select to save the file with your API keys or not.

If you want to contribute, send us a pull request on our [GitHub langflow_examples](https://github.com/logspace-ai/langflow_examples) repo. Please make sure that your example follows the [LangFlow code of conduct](https://github.com/logspace-ai/langflow/blob/dev/CODE_OF_CONDUCT.md). If your example uses any third-party libraries or packages, please include them in your PR. 

Additionally, you can opt for a dark 🌙 or light ☀️ background. The bell icon 🔔 indicates that the component has a notification.

---

## Chat

A chat icon 💬 located in the bottom right corner of the screen allows you to chat. When you click over 💬 a new screen will pop up. You can start a conversation by typing in the text box and pressing enter. The chat will respond to your message. You will also see an eraser icon. Clicking on it will clear the chat history.