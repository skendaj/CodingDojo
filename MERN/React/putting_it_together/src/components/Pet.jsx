import React, { useState } from "react";

const PetCard = (props) => {
  const { firstName, lastName } = props;
  const [showPetName, setShowPetName] = useState(true);
  const [showButton, setShowButton] = useState(true);

  const handleRemoveClick = () => {
    setShowPetName(false);
    setShowButton(false);
  };

  return (
    <div>
      {showPetName && <h5>Kafsha: {firstName} {lastName}</h5>}
      {showButton && (
        <button onClick={handleRemoveClick}>Remove {firstName}</button>
      )}
    </div>
  );
};

export default PetCard;