import { useFormikContext } from "formik";
import { useDispatch } from "react-redux";
import Button from "../../../../../components/Buttons/Button"
import { ROUTE_PATHS } from "../../../../../constants/routes";
import { setBook } from "../../../../../slicer/books/books.actions";
import { i18n } from "../../../../../translations/i18n"

const PreviewWrapper = () => {
  const { values } = useFormikContext<any>();
  const dispatch = useDispatch()
  const handlePreview = () => {
    const newProduct = { ...values }

    if (values.content instanceof FileList) {
      newProduct.content = Array.from(values.content).map((file: any) => URL.createObjectURL(file));
    } else if (values.content instanceof File) {
      newProduct.content = [URL.createObjectURL(values.content)];
    }
    newProduct['content2'] = newProduct['content'];
    delete newProduct['content'];

    dispatch(setBook(newProduct))
    const url = new URL(`${ROUTE_PATHS.STORY.replace(":id", "preview")}`, window.location.origin);
    window.open(url.toString(), "_blank");
  }
  return (<>
    <Button label={i18n.t("modules.home.contacts.form.preview")} onClick={handlePreview} />
  </>
  )
}

export default PreviewWrapper