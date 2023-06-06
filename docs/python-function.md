# Python Function


The `Python Function` component can use as a versatile tool for text manipulation. By allowing customization and incorporating search capabilities, the function enables the language model to perform various operations on input strings according to specific requirements. It provides a flexible framework that can be adapted to different use cases, empowering the language model.

This is a basic example that checks if a given zip code is or not from Brazil, allowing for both formats "XXXXX-XXX" and "XXXXXXXX":

```python
import re

def is_brazilian_zipcode(zipcode: str) -> bool:
    """Checks if the given zip code is from Brazil."""
    # Brazilian zip codes are in the format "XXXXX-XXX" or "XXXXXXXX"
    # Regular expression pattern to match the zip code
    pattern = r"\d{5}-?\d{3}"
    
    # Check if the zip code matches the pattern
    if re.match(pattern, zipcode):
        return True
    
    return False
```
Learn more about Python Function [here](https://python.langchain.com/en/latest/modules/agents/tools/custom_tools.html#using-the-tool-decorator).

### ⛓️LangFlow example

![Python Function](img/python-function.png)

 #### <a target="\_blank" href="json_files/Python_Function.json" download>Download Flow</a>

A `Tool` is a way for an agent to interact with the function.

*Name*:
```text
Is Brazilian Zip Code?
```

*Description*:
```text
Checks if the given zip code is from Brazil.
```
 *Return Direct*:
 When a tool is called, it is often desirable to have its output returned directly to the user. You can do this by setting the return_direct flag for a tool to be True.

`Conversation Buffer Memory` stores messages and extracts them into variables.

The `initialize_agent` construct a json agent from an LLM and tools.

For this example, we used [`OpenAI`](https://platform.openai.com/) as the LLM.