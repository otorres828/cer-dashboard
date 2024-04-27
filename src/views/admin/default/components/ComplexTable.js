import {
  Flex,
  Table,
 
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useMemo } from "react";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";

// Custom components
import Card from "components/card/Card";
import Menu from "components/menu/MainMenu";

// Assets
export default function ColumnsTable(props) {
  const { columnsData, tableData } = props;

  const columns = useMemo(() => columnsData, [columnsData]);
  const data = useMemo(() => tableData, [tableData]);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    headerGroups,
    page,
    prepareRow,
    initialState,
  } = tableInstance;

  console.log(data)
  initialState.pageSize = 5;

  const textColor = useColorModeValue("secondaryGray.900", "white");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");
  return (
    <Card
      direction='column'
      w='100%'
      px='0px'
      overflowX={{ sm: "scroll", lg: "hidden" }}>
      <Flex px='25px' justify='space-between' mb='10px' align='center'>
        <Text
          color={textColor}
          fontSize='22px'
          fontWeight='700'
          lineHeight='100%'>
          Fuente de ingreso principal
        </Text>
        <Menu />
      </Flex>

      <Table  variant='simple' color='gray.500' mb='24px'>
        <Thead>
          {headerGroups.map((headerGroup, index) => (
            <Tr {...headerGroup.getHeaderGroupProps()} key={index}>
                <Th
                  pe='10px'
                  key={index}
                  borderColor={borderColor}>
                  <Flex
                    justify='space-between'
                    align='center'
                    fontSize={{ sm: "10px", lg: "12px" }}
                    color='gray.400'>
                    Descripcion
                  </Flex>
                </Th>
                <Th
                  pe='10px'
                  key={index}
                  borderColor={borderColor}>
                  <Flex
                    justify='space-between'
                    align='center'
                    fontSize={{ sm: "10px", lg: "12px" }}
                    color='gray.400'>
                    Ingreso
                  </Flex>
                </Th>
                <Th
                  pe='10px'
                  key={index}
                  borderColor={borderColor}>
                  <Flex
                    justify='space-between'
                    align='center'
                    fontSize={{ sm: "10px", lg: "12px" }}
                    color='gray.400'>
                    Consumo
                  </Flex>
                </Th>
            </Tr>
          ))}
        </Thead>
        
        <Tbody>
        {data.map((row, index) => (
          <Tr key={index}>
            <Td fontSize={{ sm: "14px" }} maxH='30px !important' py='8px' minW={{ sm: "150px", md: "200px", lg: "auto" }} borderColor='transparent'>
              <Text color={textColor} fontSize='sm' fontWeight='700'>
                {row.name}
              </Text>
            </Td>
            <Td fontSize={{ sm: "14px" }} maxH='30px !important' py='8px' minW={{ sm: "150px", md: "200px", lg: "auto" }} borderColor='transparent'>
              <Text color={textColor} fontSize='sm' fontWeight='700'>
                {row.ingreso}
              </Text>
            </Td>
            <Td fontSize={{ sm: "14px" }} maxH='30px !important' py='8px' minW={{ sm: "150px", md: "200px", lg: "auto" }} borderColor='transparent'>
              <Text color={textColor} fontSize='sm' fontWeight='700'>
                {row.consumo}
              </Text>
            </Td>
          </Tr>
        ))}
      </Tbody>
      </Table>

    </Card>
  );
}
