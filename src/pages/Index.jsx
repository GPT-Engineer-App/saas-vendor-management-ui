import { Container, Text, VStack, HStack, Button, Table, Thead, Tbody, Tr, Th, Td, Input, FormControl, FormLabel, Select, IconButton } from "@chakra-ui/react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [invoices, setInvoices] = useState([]);
  const [formData, setFormData] = useState({
    invoiceNumber: "",
    poNumber: "",
    invoiceDate: "",
    vendorNumber: "",
    totalAmount: "",
    paymentTerms: "",
    status: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setInvoices([...invoices, formData]);
    setFormData({
      invoiceNumber: "",
      poNumber: "",
      invoiceDate: "",
      vendorNumber: "",
      totalAmount: "",
      paymentTerms: "",
      status: "",
    });
  };

  const handleEdit = (index) => {
    const invoiceToEdit = invoices[index];
    setFormData(invoiceToEdit);
    handleDelete(index);
  };

  const handleDelete = (index) => {
    const updatedInvoices = invoices.filter((_, i) => i !== index);
    setInvoices(updatedInvoices);
  };

  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8} align="stretch">
        <Text fontSize="4xl" fontWeight="bold" textAlign="center">
          Vendor Management SaaS
        </Text>
        <Text fontSize="2xl" fontWeight="bold">
          Invoice Verification Form
        </Text>
        <HStack spacing={4} align="stretch">
          <VStack spacing={4} align="stretch" flex="1">
            <FormControl isRequired>
              <FormLabel>Invoice Number</FormLabel>
              <Input type="text" maxLength={20} placeholder="Enter Invoice Number" name="invoiceNumber" value={formData.invoiceNumber} onChange={handleChange} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Invoice Date</FormLabel>
              <Input type="date" name="invoiceDate" value={formData.invoiceDate} onChange={handleChange} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Total Amount</FormLabel>
              <Input type="number" min={0} placeholder="Enter Total Amount" name="totalAmount" value={formData.totalAmount} onChange={handleChange} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Status</FormLabel>
              <Select placeholder="Select Status" name="status" value={formData.status} onChange={handleChange}>
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
              </Select>
            </FormControl>
          </VStack>
          <VStack spacing={4} align="stretch" flex="1">
            <FormControl isRequired>
              <FormLabel>PO Number</FormLabel>
              <Input type="text" maxLength={20} placeholder="Enter PO Number" name="poNumber" value={formData.poNumber} onChange={handleChange} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Vendor Number</FormLabel>
              <Input type="text" maxLength={20} placeholder="Enter Vendor Number" name="vendorNumber" value={formData.vendorNumber} onChange={handleChange} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Payment Terms</FormLabel>
              <Input type="text" maxLength={50} placeholder="Enter Payment Terms" name="paymentTerms" value={formData.paymentTerms} onChange={handleChange} />
            </FormControl>
            <Button colorScheme="teal" size="md" alignSelf="flex-end" onClick={handleSubmit}>
              Submit
            </Button>
          </VStack>
        </HStack>

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
            {invoices.map((invoice, index) => (
              <Tr key={index}>
                <Td>{invoice.invoiceNumber}</Td>
                <Td>{invoice.poNumber}</Td>
                <Td>{invoice.invoiceDate}</Td>
                <Td>{invoice.vendorNumber}</Td>
                <Td>{invoice.totalAmount}</Td>
                <Td>{invoice.paymentTerms}</Td>
                <Td>{invoice.status}</Td>
                <Td>
                  <HStack spacing={2}>
                    <IconButton aria-label="View" icon={<FaEye />} />
                    <IconButton aria-label="Edit" icon={<FaEdit />} onClick={() => handleEdit(index)} />
                    <IconButton aria-label="Delete" icon={<FaTrash />} onClick={() => handleDelete(index)} />
                  </HStack>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </VStack>
    </Container>
  );
};

export default Index;
