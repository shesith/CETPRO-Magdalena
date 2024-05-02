export default function Loader() {
  return (
    <article className="modal">
      <div className="content-loader shadow-2xl w-80 h-60 ">
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <h4 className="text-[#608DC4] text-2xl font-bold">Enviando datos..</h4>
      </div>
    </article>
  );
}
