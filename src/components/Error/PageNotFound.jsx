import notFound from "../Image/no-photo.jpg";
import {ImageError, Wrapper} from "./PageNotFound.styled"

const PageNotFound = () => {
    return (
        <Wrapper>
            <ImageError src={notFound} width="350" alt="Page-Not-Found"/>
        </Wrapper>
    );
};
export default PageNotFound;
