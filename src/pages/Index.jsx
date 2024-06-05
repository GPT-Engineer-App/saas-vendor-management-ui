import { Container, Text, VStack, HStack, Button, Table, Thead, Tbody, Tr, Th, Td, Input, FormControl, FormLabel, Checkbox, IconButton, Box } from "@chakra-ui/react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [invoices, setInvoices] = useState([]);
  const [formData, setFormData] = useState({
    materialNumber: "",
    description: "",
    unitOfMeasure: "",
    materialGroup: "",
    materialType: "",
    plant: "",
    storageLocation: "",
    valuationClass: "",
    standardPrice: "",
    movingAveragePrice: "",
    weight: "",
    volume: "",
    hazardousIndicator: false,
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
        <Text fontSize="4xl" fontWeight="bold" textAlign="center" color="teal.500" mb={4}>
          Material Management System
        </Text>
        <Text fontSize="2xl" fontWeight="bold" color="teal.600">
          Material Management Form
        </Text>
        <HStack spacing={4} align="stretch">
          <VStack spacing={4} align="stretch" flex="1">
            <FormControl isRequired>
              <FormLabel>Material Number</FormLabel>
              <Input type="text" maxLength={20} placeholder="Enter Material Number" name="materialNumber" value={formData.materialNumber} onChange={handleChange} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Description</FormLabel>
              <Input type="text" maxLength={255} placeholder="Enter Description" name="description" value={formData.description} onChange={handleChange} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Unit Of Measure</FormLabel>
              <Input type="text" maxLength={10} placeholder="Enter Unit Of Measure" name="unitOfMeasure" value={formData.unitOfMeasure} onChange={handleChange} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Material Group</FormLabel>
              <Input type="text" maxLength={50} placeholder="Enter Material Group" name="materialGroup" value={formData.materialGroup} onChange={handleChange} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Material Type</FormLabel>
              <Input type="text" maxLength={20} placeholder="Enter Material Type" name="materialType" value={formData.materialType} onChange={handleChange} />
            </FormControl>
          </VStack>
          <VStack spacing={4} align="stretch" flex="1">
            <FormControl isRequired>
              <FormLabel>Plant</FormLabel>
              <Input type="text" maxLength={10} placeholder="Enter Plant" name="plant" value={formData.plant} onChange={handleChange} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Storage Location</FormLabel>
              <Input type="text" maxLength={10} placeholder="Enter Storage Location" name="storageLocation" value={formData.storageLocation} onChange={handleChange} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Valuation Class</FormLabel>
              <Input type="text" maxLength={20} placeholder="Enter Valuation Class" name="valuationClass" value={formData.valuationClass} onChange={handleChange} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Standard Price</FormLabel>
              <Input type="number" min={0} step={0.01} placeholder="Enter Standard Price" name="standardPrice" value={formData.standardPrice} onChange={handleChange} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Moving Average Price</FormLabel>
              <Input type="number" min={0} step={0.01} placeholder="Enter Moving Average Price" name="movingAveragePrice" value={formData.movingAveragePrice} onChange={handleChange} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Weight</FormLabel>
              <Input type="number" min={0} step={0.01} placeholder="Enter Weight" name="weight" value={formData.weight} onChange={handleChange} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Volume</FormLabel>
              <Input type="number" min={0} step={0.01} placeholder="Enter Volume" name="volume" value={formData.volume} onChange={handleChange} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Hazardous Indicator</FormLabel>
              <Checkbox name="hazardousIndicator" isChecked={formData.hazardousIndicator} onChange={(e) => setFormData({ ...formData, hazardousIndicator: e.target.checked })}>
                Hazardous
              </Checkbox>
            </FormControl>
            <Button colorScheme="teal" size="md" alignSelf="flex-end" onClick={handleSubmit}>
              Submit
            </Button>
          </VStack>
        </HStack>

        <Text fontSize="2xl" fontWeight="bold" color="teal.600">
          Materials
        </Text>
        <Box maxH="400px" overflowY="auto">
          <Table variant="simple" border="1px" borderColor="gray.200">
            <Thead>
              <Tr border="1px" borderColor="gray.200">
                <Th border="1px" borderColor="gray.200">
                  Material Number
                </Th>
                <Th border="1px" borderColor="gray.200">
                  Description
                </Th>
                <Th border="1px" borderColor="gray.200">
                  Unit Of Measure
                </Th>
                <Th border="1px" borderColor="gray.200">
                  Material Group
                </Th>
                <Th border="1px" borderColor="gray.200">
                  Material Type
                </Th>
                <Th border="1px" borderColor="gray.200">
                  Plant
                </Th>
                <Th border="1px" borderColor="gray.200">
                  Storage Location
                </Th>
                <Th border="1px" borderColor="gray.200">
                  Valuation Class
                </Th>
                <Th border="1px" borderColor="gray.200">
                  Standard Price
                </Th>
                <Th border="1px" borderColor="gray.200">
                  Moving Average Price
                </Th>
                <Th border="1px" borderColor="gray.200">
                  Weight
                </Th>
                <Th border="1px" borderColor="gray.200">
                  Volume
                </Th>
                <Th border="1px" borderColor="gray.200">
                  Hazardous Indicator
                </Th>
                <Th border="1px" borderColor="gray.200">
                  Actions
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {invoices.map((material, index) => (
                <Tr key={index} border="1px" borderColor="gray.200">
                  <Td border="1px" borderColor="gray.200">
                    {material.materialNumber}
                  </Td>
                  <Td border="1px" borderColor="gray.200">
                    {material.description}
                  </Td>
                  <Td border="1px" borderColor="gray.200">
                    {material.unitOfMeasure}
                  </Td>
                  <Td border="1px" borderColor="gray.200">
                    {material.materialGroup}
                  </Td>
                  <Td border="1px" borderColor="gray.200">
                    {material.materialType}
                  </Td>
                  <Td border="1px" borderColor="gray.200">
                    {material.plant}
                  </Td>
                  <Td border="1px" borderColor="gray.200">
                    {material.storageLocation}
                  </Td>
                  <Td border="1px" borderColor="gray.200">
                    {material.valuationClass}
                  </Td>
                  <Td border="1px" borderColor="gray.200">
                    {material.standardPrice}
                  </Td>
                  <Td border="1px" borderColor="gray.200">
                    {material.movingAveragePrice}
                  </Td>
                  <Td border="1px" borderColor="gray.200">
                    {material.weight}
                  </Td>
                  <Td border="1px" borderColor="gray.200">
                    {material.volume}
                  </Td>
                  <Td border="1px" borderColor="gray.200">
                    {material.hazardousIndicator ? "Yes" : "No"}
                  </Td>
                  <Td border="1px" borderColor="gray.200">
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
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
