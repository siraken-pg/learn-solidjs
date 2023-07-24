import { createSignal, type Component, For } from "solid-js";

import logo from "./logo.svg";
import styles from "./App.module.css";

const App_Default: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </header>
    </div>
  );
};

const App: Component = () => {
  const [count, setCount] = createSignal(0);
  const books = [
    { title: "The Way of Kings", author: "Brandon Sanderson" },
    { title: "Name of the Wind", author: "Patrick Rothfuss" },
    { title: "The Final Empire", author: "Brandon Sanderson" },
  ];
  return (
    <div class={styles.App}>
      <h1>Hello Solid</h1>
      <p>{count()}</p>
      <button type="button" onclick={() => setCount((prev) => prev + 1)}>
        Increment
      </button>
      <button type="button" onclick={() => setCount((prev) => prev - 1)}>
        Decrement
      </button>
      <button type="button" onclick={() => setCount(0)}>
        Reset
      </button>
      <hr />
      <div>
        <For each={books}>
          {(book) => (
            <div>
              <h3>{book.title}</h3>
              <p>{book.author}</p>
            </div>
          )}
        </For>
      </div>
    </div>
  );
};

export default App;
