import {StrObjectStr, StrObjectArrayStr} from "../interfaces";

export const NavListOptions: string[] = ['Página inicial', 'Camisetas', 'Calças', 'Sapatos', 'Contato' ]

export const NavListOptionsRoutes: StrObjectStr = {
    'Página inicial': '/home',
    'Sapatos': '/shop/shoes',
}

export const FilterOptionsType: Array<string> = ['list', 'color_pallete', 'list']

export const FilterOptions: StrObjectArrayStr = {
    'Categorias': ['Roupas', 'Sapatos', 'Acessórios'],
    'Cores': ['#cc0d1f','#f36324', '#28a3aa'],
    'Tipo': ['Corrida', 'Caminhada', 'Casual', 'Social']

}

export const LoremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet malesuada dolor, id mollis lorem bibendum at. Nulla a sem sed augue laoreet fermentum. Cras vitae sapien et est hendrerit bibendum ut non sem. Etiam interdum nunc sed odio faucibus luctus. Nulla dui velit, cursus eget ante sed, egestas ultrices velit. Donec lacus dolor, vulputate vitae dignissim sit amet, suscipit eu odio. Vestibulum vestibulum aliquam gravida. Fusce porttitor leo est, eu feugiat nibh accumsan ac. Fusce consectetur semper tincidunt. Sed consectetur dolor eu nunc congue, pharetra porta risus dapibus. Sed nisl ex, viverra quis odio eu, pellentesque finibus est. Curabitur felis enim, fringilla in erat et, malesuada tincidunt eros. Sed ac est sit amet metus rutrum pretium. Aliquam id libero mauris.'
