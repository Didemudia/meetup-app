import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import FavouriteContext from "../store/favourite-context";

function FavouritesPage() {
  const favouriteCtx = useContext(FavouriteContext);

  let content;
  if (favouriteCtx.totalFavourite === 0) {
    content = <p>You dont have any facourite, add some</p>;
  } else {
    content = <MeetupList meetups={favouriteCtx.favourite} />;
  }
  

  return (
    <section>
      <h1>My Favourites</h1>
      {content}
    </section>
  );
}

export default FavouritesPage;
