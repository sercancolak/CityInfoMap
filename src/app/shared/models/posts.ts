export interface IPosts {
    id: string,
    title: string,
    content: string,
    lat: string,
    long: string,
    image_url: string,
    created_at: string,
    updated_at: string
}

export interface IPostsDto {
    title: string,
    content: string,
    lat: string,
    long: string,
    image_url: string
}