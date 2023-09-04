import { useState } from 'react';
import {
  Container,
  FormControl,
  Input,
  Textarea,
  Grid,
  Button,
  useToast,
} from '@chakra-ui/react';
import axios from 'axios';


function ContactForm() {
  const toast = useToast()
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    destinationCountry: '',
    enquiry: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSend = {
      data: {
        ...formData,
      },
    };

    try {
      const response = await axios.post('http://localhost:1337/api/contact-forms', dataToSend);
      console.log('Form data submitted successfully:', response.data);
      toast({
        title: 'Form Filled Successfully',
        description: "We Recieved You Data. We will get back soon. Thank You",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    } catch (error) {
      console.error('Error submitting form data:', error);
      toast({
        title: 'Form Filled Error',
        description: "There might be some problem. Please Try again later.",
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    }
  };

  return (
  
      <Container maxWidth="4xl" mt={24}>
        <form onSubmit={handleSubmit}>
          <Grid templateColumns="repeat(2, 1fr)" gap={4} fontFamily={"sans-serif"}>
            <FormControl >
             
              <Input
                type="text"
                name="name"
                placeholder='Name'
                value={formData.name}
                onChange={handleChange}
                variant={"none"}
                border={"1px solid gainsboro"}
              />
            </FormControl>
            <FormControl>
              
              <Input
                type="tel"
                name="phoneNumber"
                placeholder='Phone Number'
                value={formData.phoneNumber}
                onChange={handleChange}
                variant={"none"}
                border={"1px solid gainsboro"}
              />
            </FormControl>
            <FormControl>
             
              <Input
                type="email"
                name="email"
                placeholder='Email'
                value={formData.email}
                onChange={handleChange}
                variant={"none"}
                border={"1px solid gainsboro"}
              />
            </FormControl>
            <FormControl>
              
              <Input
                type="text"
                name="destinationCountry"
                placeholder='Destination Country'
                value={formData.destinationCountry}
                onChange={handleChange}
                variant={"none"}
                border={"1px solid gainsboro"}
              />
            </FormControl>
          </Grid>
          <FormControl mt={4} fontFamily={"sans-serif"}>
           
            <Textarea
              name="enquiry"
              placeholder='Inquiry/Questions'
              value={formData.enquiry}
              onChange={handleChange}
              variant={"none"}
              border={"1px solid gainsboro"}
            />
          </FormControl>
          <Button mt={4} backgroundColor={"#051F16"} type="submit" color={"white"} variant={"none"} borderRadius={"none"} fontWeight={"300"}>
            SUBMIT
          </Button>
        </form>
      </Container>
  );
}

export default ContactForm;
