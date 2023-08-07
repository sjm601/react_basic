// 재사용을 위한 사용자 정의 컴포넌트

function Create(props) {
  return (
    <article>
      <h2>Create</h2>
      <form onSubmit={event =>{
        event.preventDefault();
        const title = event.target.title.value;
        const body = event.target.body.value;
        props.onCreate(title, body);
      }}>
        <p><input type="text" name="title" placeholder="title" /></p>
        <p><textarea name="body" placeholder="body"/></p>
        <p><input type="submit" value="Create"/></p>
      </form>
    </article>
  );
}

export default Create;