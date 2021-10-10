import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { toggleItemInWishList } from "../../store/actions";
import { Heart } from "../UI/Icons/Icons.jsx";
import { getWishlist } from "../../store/selectors";

const AddToWishlist = (props) => {
  function toggleWishlistItem() {
    props.addRemoveItemInWishlist(props.productId);
  }

  function wished() {
    return props.wishlistItems.find(
      (productId) => productId === props.productId
    )
      ? "wished"
      : null;
  }
  return (
    <span
      className={`${props.classStyleName} ${wished()}`}
      title={props.title}
      onClick={toggleWishlistItem}
    >
      <Heart />
    </span>
  );
};

const mapStateToProps = (state) => {
  return {
    wishlistItems: getWishlist(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addRemoveItemInWishlist: (productId) =>
      dispatch(toggleItemInWishList(productId)),
  };
};

AddToWishlist.prototypes = {
  productId: PropTypes.number.isRequired,
  classStyleName: PropTypes.string,
  title: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddToWishlist);
