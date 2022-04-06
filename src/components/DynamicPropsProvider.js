import * as React from "react";

const DynamicPropsContext = new React.createContext({
    props: {
        title: 'Title',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dictum posuere ex, vitae molestie nisl efficitur ultricies. Aenean lobortis nulla ut egestas pretium. Pellentesque suscipit felis ut dapibus pretium. Fusce ut est sed ipsum ullamcorper viverra vel nec quam. Aliquam ut eros eget felis tempus feugiat. Suspendisse potenti. In nunc lacus, aliquam sit amet sapien eget, consectetur scelerisque dolor. Phasellus ut libero nibh.',
    },
    setProps: null,
});

const DynamicPropsProvider = ({
    children,
}) => {
    const [props, setProps] = React.useState({
        title: 'Title',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dictum posuere ex, vitae molestie nisl efficitur ultricies. Aenean lobortis nulla ut egestas pretium. Pellentesque suscipit felis ut dapibus pretium. Fusce ut est sed ipsum ullamcorper viverra vel nec quam. Aliquam ut eros eget felis tempus feugiat. Suspendisse potenti. In nunc lacus, aliquam sit amet sapien eget, consectetur scelerisque dolor. Phasellus ut libero nibh.',
    });

    return <DynamicPropsContext.Provider value={{
        props,
        setProps,
    }}>
        { children }
    </DynamicPropsContext.Provider>;
};

export const useDynamicProps = () => React.useContext(DynamicPropsContext);

export default DynamicPropsProvider;

