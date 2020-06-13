<template>
  <div id="app" class="container">
    <h1>
      Vue-Todo App Created with &#x1F5A4; by
      <a
        href="https://www.linkedin.com/in/amans199/"
        target="_blank"
        rel="noopener"
      >Ahmed Mansour</a>
    </h1>
    <b-card header-tag="header" footer-tag="footer" class="my-5">
      <template v-slot:header>
        <h2 class="mb-0" v-if="state.todos.length != 0 ">You have {{state.todos.length}} Todo</h2>
        <h2 class="mb-0" v-if="state.todos.length == 0">You have nothing todo your majesty</h2>
      </template>
      <ul class="d-flex justify-content-center flex-column my-2 px-0">
        <span v-if="state.todos.length == 0">Add new notes to show up here</span>
        <a
          href="#"
          v-if="state.todos.length != 0 && doneIsHidden"
          class="my-2"
          @click="showDoneItems()"
        >Show Completed items</a>
        <a
          href="#"
          v-if="state.todos.length != 0 && !doneIsHidden"
          class="my-2"
          @click="hideDoneItems()"
        >Hide Completed items</a>
        <li
          v-for="todo in state.todos"
          :key="todo.index"
          class="justify-content-between flex-row my-1 p-2 align-items-center"
          :class="todo.done == true? ' todoDone ' : ' '"
          @click="todo.done === true ? todo.done = false : todo.done = true"
        >
          <span>{{todo.text}}</span>
          <b-form-checkbox
            id="mark-todo"
            v-model="todo.done"
            name="mark-todo"
            class="d-flex align-items-center"
          ></b-form-checkbox>
        </li>
      </ul>
      <template v-slot:footer>
        <b-form @submit="addTodo($event)">
          <b-form-group id="input-group-1">
            <b-form-input
              id="vue-todo"
              v-model="TodoText"
              type="text"
              required
              placeholder="Don't forget to ..."
            ></b-form-input>
          </b-form-group>
          <b-button type="reset" variant="danger" class="mx-2">Reset</b-button>
          <b-button type="submit" variant="primary" class="mx-2">Submit</b-button>
        </b-form>
      </template>
    </b-card>

    <!-- <p>{{this.state.todos}}</p> -->
    <!-- <p>{{state.todos}}</p> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      TodoText: "",
      state: {
        showDone: false,
        todos: []
      },
      doneIsHidden: false
    };
  },
  methods: {
    addTodo(e) {
      e.preventDefault();
      this.state.todos.push({ text: this.TodoText, done: false });
      this.TodoText = "";
    },
    toggleTodo() {
      if (this.todo.done == true) {
        return (this.todo.done = false);
      }
    },
    hideDoneItems() {
      let todoDone = document.querySelectorAll(".todoDone");
      todoDone.forEach(el => {
        el.style.display = "none";
      });
      this.doneIsHidden = true;
    },
    showDoneItems() {
      let todoDone = document.querySelectorAll(".todoDone");
      todoDone.forEach(el => {
        el.style.display = "flex";
      });
      this.doneIsHidden = false;
    }
  }
};
</script>


<style lang="scss" scoped>
@import "~bootstrap";
@import "~bootstrap-vue";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
* {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  .container {
    max-width: 400px;
    margin: auto;
    font-family: "Roboto", sans-serif;
    li {
      display: flex;
      cursor: pointer;
      &:hover {
        background-color: rgba(0, 0, 0, 0.03);
      }
      &.todoDone {
        text-decoration: line-through;
        opacity: 0.7;
        font-style: italic;
        color: gray;
      }
    }
  }
}
</style>
