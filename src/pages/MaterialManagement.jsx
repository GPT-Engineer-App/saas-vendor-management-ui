import { Container, Text, VStack, HStack, Button, Input, FormControl, FormLabel, Checkbox } from "@chakra-ui/react";
import { useState } from "react";

const MaterialManagement = () => {
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
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = () => {
    console.log(formData);
    setFormData({
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
  };

  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8} align="stretch">
        <Text fontSize="4xl" fontWeight="bold" textAlign="center">
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
            <FormControl isRequired>
              <FormLabel>Plant</FormLabel>
              <Input type="text" maxLength={10} placeholder="Enter Plant" name="plant" value={formData.plant} onChange={handleChange} />
            </FormControl>
          </VStack>
          <VStack spacing={4} align="stretch" flex="1">
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
              <Checkbox name="hazardousIndicator" isChecked={formData.hazardousIndicator} onChange={handleChange}>
                Hazardous
              </Checkbox>
            </FormControl>
            <Button colorScheme="teal" size="md" alignSelf="flex-end" onClick={handleSubmit}>
              Submit
            </Button>
          </VStack>
        </HStack>
      </VStack>
    </Container>
  );
};

export default MaterialManagement;
