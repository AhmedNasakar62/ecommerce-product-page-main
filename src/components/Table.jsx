import { FaTrashAlt } from "react-icons/fa";
import styled from "styled-components";

const Table = ({ select, handleDelete }) => {
  return (
    <Wrapper>
      <Tbody>
        {select.length ? (
          <>
            {select.map((item) => (
              <Tr key={item.id}>
                <Td>
                  <figure>
                    <img src={item.image} alt="" />
                  </figure>
                </Td>
                <td>
                  Fall Limited Edition Sneakers <br />
                  $125.00 x {item.count}{" "}
                  <span style={{ color: "hsl(0, 0%, 0%)" }}>
                    ${125.0 * item.count}.00
                  </span>
                </td>
                <Trash>
                  <FaTrashAlt onClick={() => handleDelete(item.id)} />
                </Trash>
              </Tr>
            ))}
          </>
        ) : (
          <tr style={{ margin: "1rem auto" }}>
            <td>Your cart is empty.</td>
          </tr>
        )}
      </Tbody>
    </Wrapper>
  );
};

const Wrapper = styled.table`
  color: hsl(220, 14%, 75%);
  min-height: 50%;
  width: 100%;
  line-height: 1.5;
`;

const Tbody = styled.tbody`
  display: grid;
  gap: 1rem;
`;

const Tr = styled.tr`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const Td = styled.td`
  width: 18%;
  figure {
    width: 100%;
  }
  img {
    border-radius: 0.5rem;
  }
`;

const Trash = styled.td`
  cursor: pointer;
`;

export default Table;
