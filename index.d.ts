export type Post =  {
    title: string 
    authorName: string
    _updatedAt: string
    publishedAt: string
    slug: {
      current: string
      _type: string
    },
    _createdAt: string
    _type: string
    _id: string
    mainImage: { _type: string, asset: { _ref: string, _type: string }  }
    categoryList: string[]
    body: any[]
    author: { _ref: string, _type: string }
    mainImageUrl: string
    _rev: string
    categories: any[]
  }