import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
function Loader() {
  return (
    <>
      <div className="gallery">
        {Array(20) // fills array with 20 zeros and map through it //console.log(Array(20).fill(20))
          .fill(0)
          .map((val, i) => (
            <div className="movieCard" key={i}>
              <SkeletonTheme baseColor="#202020" highlightColor="#444">
                <Skeleton count={1} height={350} />
              </SkeletonTheme>
            </div>
          ))}
      </div>
    </>
  );
}

export default Loader;
