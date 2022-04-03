export default function CategoryItem({ data }: TypeCategoryItemProps) {
    return <span className="mr-3 text-sm font-medium uppercase text-primary-500">{data.name}</span>;
}
