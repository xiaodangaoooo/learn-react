import { GalleryProps } from "@/types/gallery";
import { ListItemProps } from "@/types/listItem";

function ListItem({ label, content }: ListItemProps) {
  return (
    <li>
      <b> {label} </b>
      {content}
    </li>
  );
}

function Profile({scientist, size = 100}: GalleryProps) {
  return (
    <div className="profile">
      <h2>{scientist.name}</h2>
      <img
        className="avatar"
        src={'https://i.imgur.com/' + scientist.imageId + 's.jpg'}
        alt={scientist.name}
        width={70}
        height={70}
      />
      <ul>
        <ListItem label="Profession:" content = {scientist.profession} />
        <ListItem label = "Awards:" content = {scientist.awards} />
        <ListItem label = "Discovered:" content = {scientist.discovery} />
      </ul>
    </div>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        scientist={{
          name: "Maria Skłodowska-Curie",
          imageId: "szV5sdG",
          profession: "physicist and chemist",
          awards: "4 (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)",
          discovery: "polonium (chemical element)"
        }}
      />
      <Profile
        scientist={{
          name: "Katsuko Saruhashi",
          imageId: "YfeOqp2",
          profession: "geochemist",
          awards: "2 (Miyake Prize for geochemistry, Tanaka Prize)",
          discovery: "a method for measuring carbon dioxide in seawater"
        }}
      />
    </div>
  );
}