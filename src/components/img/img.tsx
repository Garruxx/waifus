import "./img.sass";
export const IMG = ({ src }: { src: string }) => {
  return (
    <div className="img">
      <img src={src} width={444} height={444} />
      <a href={src} download={true}>
        <span>Descargar</span>
      </a>
    </div>
  );
};
