import { Blue, Text } from "./style";
import { BiNotepad } from "react-icons/bi";

export default function Logo() {
  return (
    <Text>
      <Blue>
        <BiNotepad size={40} />
      </Blue>
      Repo<Blue>Provas</Blue>
    </Text>
  );
}
