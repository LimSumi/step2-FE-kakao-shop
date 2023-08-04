import {comma} from '../../utils/convert';
import Photo from '../atoms/Photo';

const ProductInformationColumn = ({product}) => {
  const {productName, price, image} = product;
  return (
       <div className="flex py-8 pr-8 w-[400px]">
                <Photo src={'https://user-app.krampoline.com/kd4fb93df2a38a'+ product.image} alt={product.productName} />
            
    </div>
  );
}

export default ProductInformationColumn;