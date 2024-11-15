# LLEMME CHAT

This is a very stripped-down chat UI for interacting with a **Open AI-esque Chat API** API. 

## Getting Started

### OpenAI-esque Chat API

You will need access to a running Large Language Model. Dealer's choice. I used [microsoft/Phi-3-mini-4k-instruct](https://huggingface.co/microsoft/Phi-3-mini-4k-instruct) because it seemed reputable enough and it's a lightweight model. I wasn't trying to wait 20 minutes for every response. Though if you want quality responses, a larger model should be used.

You also need an API that will accept and respond to requests in the Open AI Chat format. This api should reach out to your running model and send back its responses on the requestors behalf. 

To satisfy both of the above conditions, you can simply run [oobabooga/text-generation-webui](https://github.com/oobabooga/text-generation-webui) with the `--api` option. This provides you with a friendly UI for downloading and running LLMs and the `--api` flag enables the out-of-the-box OpenAI-esque Chat API.

### The LLEMME CHAT frontend

This is the app whose source code is the current repo you're looking at. It's just a next.js app, so you can launch it with `npm run dev` after you've installed the node_modules. The UI should be served at [http://localhost:3000](http://localhost:3000).
