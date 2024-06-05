import { Container, Text, VStack, HStack, Button, Table, Thead, Tbody, Tr, Th, Td, Input, FormControl, FormLabel, Select, IconButton } from "@chakra-ui/react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8} align="stretch">
        <Text fontSize="4xl" fontWeight="bold" textAlign="center">
          Vendor Management SaaS
        </Text>
        <Button colorScheme="teal" size="lg" alignSelf="center">
          Get Started
        </Button>

        <Text fontSize="2xl" fontWeight="bold">
          Invoice Verification Form
        </Text>
        <VStack spacing={4} align="stretch">
          <FormControl isRequired>
            <FormLabel>Invoice Number</FormLabel>
            <Input type="text" maxLength={20} placeholder="Enter Invoice Number" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>PO Number</FormLabel>
            <Input type="text" maxLength={20} placeholder="Enter PO Number" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Invoice Date</FormLabel>
            <Input type="date" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Vendor Number</FormLabel>
            <Input type="text" maxLength={20} placeholder="Enter Vendor Number" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Total Amount</FormLabel>
            <Input type="number" min={0} placeholder="Enter Total Amount" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Payment Terms</FormLabel>
            <Input type="text" maxLength={50} placeholder="Enter Payment Terms" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Status</FormLabel>
            <Select placeholder="Select Status">
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
            </Select>
          </FormControl>
          <Button colorScheme="teal" size="md">
            Submit
          </Button>
        </VStack>

        <Text fontSize="2xl" fontWeight="bold">
          Invoices
        </Text>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Invoice Number</Th>
              <Th>PO Number</Th>
              <Th>Invoice Date</Th>
              <Th>Vendor Number</Th>
              <Th>Total Amount</Th>
              <Th>Payment Terms</Th>
              <Th>Status</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>INV001</Td>
              <Td>PO1234</Td>
              <Td>2023-10-01</Td>
              <Td>VEND001</Td>
              <Td>$1000</Td>
              <Td>Net 30</Td>
              <Td>Pending</Td>
              <Td>
                <HStack spacing={2}>
                  <IconButton aria-label="View" icon={<FaEye />} />
                  <IconButton aria-label="Edit" icon={<FaEdit />} />
                  <IconButton aria-label="Delete" icon={<FaTrash />} />
                </HStack>
              </Td>
            </Tr>
            {/* Add more rows as needed */}
          </Tbody>
        </Table>
      </VStack>
    </Container>
  );
};

export default Index;
