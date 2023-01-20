import React from "react";
import { IconButton } from "@chakra-ui/react";

const Account = ({ link, children }) => {
  return (
    <IconButton
      as="a"
      href={link}
      icon={children}
      size="lg"
      variant="solid"
      borderRadius="full"
      bgColor="gray.700"
    />
  );
};

export default Account;
