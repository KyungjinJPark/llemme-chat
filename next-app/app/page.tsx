"use client"
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import useRequest from "./utils/useRequest";

export default function Home() {
  const [messages, setMessages] = useState([
    { "role": "assistant", "content": "Hello! How can i help you today?" },
  ])
  const [input, setInput] = useState("")
  const [fetch, response, error, loading] = useRequest("POST", "/api/chat", {
    messages: messages,
    mode: "instruct",
    instruction_template: "Alpaca"
  })
  useEffect(() => {
    if (messages[messages.length - 1].role === "user")
      fetch()
  }, [messages])
  useEffect(() => {
    if (response) {
      setMessages(oldMsgs => [...oldMsgs, response.choices[0].message])
    }
  }, [response])

  const onSend = () => {
    setMessages(oldMsgs => [...oldMsgs, { role: "user", content: input }])
    setInput("")
  }

  if (error) return <div>Error occurred</div>

  return (
    <div className={styles.page}>
      <h1>LLEMME CHAT</h1>
      {messages.map(({ role, content }, i) => <Message key={i} role={role} content={content} />)}
      {loading && <div>Loading...</div>}
      <div className={styles.chatInput}>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={onSend}>send</button>
      </div>
    </div>
  );
}

function Message({ role, content }) {
  return <div className={`${styles.message} ${role === 'assistant' ? styles.assistant : styles.user}`}>
    <div className={styles.role}>{role}</div>
    <div>{content}</div>
  </div>
}
