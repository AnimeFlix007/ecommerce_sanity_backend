export default {
  name: 'Products',
  title: 'Products',
  type: 'document',
  fields: [
    {
      name: 'id',
      title: 'id',
      type: 'string',
    },
    {
      name: 'Item',
      title: 'Item',
      type: 'string',
    },
    {
      name: 'Desc',
      title: 'Desc',
      type: 'string',
    },
    {
      name: 'Price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'Category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'newArrivals', value: 'newArrivals' },
          { title: 'bestSellers', value: 'bestSellers' },
          { title: 'topRated', value: 'topRated' },
        ],
      },
    },
    {
      name: 'Image',
      title: 'Product_Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
