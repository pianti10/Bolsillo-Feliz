import "./loader.css";

export default function Loader(){
    return (
        <>
          <div className="loaderCenter">
            <svg viewBox="25 25 50 50" className="loading">
                <circle r="20" cy="50" cx="50"></circle>
            </svg>
          </div>
        </>
    )
}