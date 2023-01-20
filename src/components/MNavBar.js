import NavItem from "./NavItem";

const items = [
    'men',
    'Women',
    'kids',
    'sale',
    'new arrivals',
    'sustainability',
    'rerun',
    'stores',
    'account',
    'help'
]

const catagories = [
    'rerun',
    'stores',
    'account',
    'help'
]


const MNavBar = () => {
    return (
        <nav className="max-h-screen overflow-auto border-yellow-500 border-lg pb-60 z-40">
          <NavItem items={items}  />
        </nav>
    )
}

export default MNavBar;