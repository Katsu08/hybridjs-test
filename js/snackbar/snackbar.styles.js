export default `
  .hSnackbar {
    position: fixed;
    bottom: 0px;
    left: 0px;
    right: 0px;
    text-align: center;
    padding: 20px;
  }

  .hSnackbar__bar {
    border-radius: 10px;
    background-color: var(--secondary);
    padding: 25px;
    width: 300px;
    max-width: 90vw;
    margin: 10px auto;
    transition: opacity 0.2s;
  }

  .hSnackbar--show {
    opacity: 100;
  }
`
