import axios from "axios";

export default function DeleteButtonWilder({ _id, setTrigger }: any) {

 
  return (
    <>
      <button
        onClick={async (e) => {
          e.preventDefault();
          try {
            const deleteWilder = await axios.delete(
              `http://localhost:3005/api/wilder/delete/${_id}`
            );
            setTrigger(Date.now())
            console.log(deleteWilder);
          } catch (error) {}
        }}
      >
        Delete
      </button>
    </>
  );
}
