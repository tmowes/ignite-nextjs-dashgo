import { NextPage } from 'next'
import dynamic from 'next/dynamic'

import { Box, Flex, SimpleGrid, Text, theme } from '@chakra-ui/react'

import * as C from '~/components'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })
const options = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  markers: {
    size: 5,
    colors: ['#000524'],
    strokeColor: '#00BAEC',
    strokeWidth: 3,
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      '2021-03-08T00:00:00.0000Z',
      '2021-03-09T00:00:00.0000Z',
      '2021-03-10T00:00:00.0000Z',
      '2021-03-11T00:00:00.0000Z',
      '2021-03-12T00:00:00.0000Z',
      '2021-03-13T00:00:00.0000Z',
      '2021-03-14T00:00:00.0000Z',
    ],
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
}
const series = [{ name: 'series1', data: [31, 25, 49, 30, 69, 22, 35] }]

const Dashboard: NextPage = () => (
  <>
    <C.MetaTags title="Painel Principal" />
    <Flex w="100vw" h="100vh" direction="column">
      <C.Header />
      <Flex w="100%" maxWidth={1480} my="6" px="6">
        <C.Sidebar />
        <SimpleGrid flex="1" gap="4" minChildWidth={320} align="flex-start">
          <Box p={['4', '8']} bg="gray.800" borderRadius={8} pb={['2', '4']}>
            <Text fontSize="lg" mb="4">
              Incritos da semana
              <Chart
                options={options}
                series={series}
                type="area"
                height={160}
              />
            </Text>
          </Box>
          <Box p={['4', '8']} bg="gray.800" borderRadius={8} pb={['2', '4']}>
            <Text fontSize="lg" mb="4">
              Taxa de abertura
              <Chart
                options={options}
                series={series}
                type="area"
                height={160}
              />
            </Text>
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  </>
)

export default Dashboard
