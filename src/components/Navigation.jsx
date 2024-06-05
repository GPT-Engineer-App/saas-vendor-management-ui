import { HStack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <HStack spacing={4} p={4} bg="gray.100">
      <Button as={Link} to="/" colorScheme="teal">
        Invoice Verification
      </Button>
      <Button as={Link} to="/material-management" colorScheme="teal">
        Material Management
      </Button>
    </HStack>
  );
};

export default Navigation;
