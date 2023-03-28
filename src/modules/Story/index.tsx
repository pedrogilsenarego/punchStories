import { ReactElement, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import Loader from "../../components/Loader"
import { fetchBook } from "../../slicer/books/books.actions"
import { Book } from "../../slicer/books/books.types"
import { State } from "../../slicer/types"
import { lazyWithRetryAndLoader } from "../../utils/lazyWithRetry"
import { Template } from "./types"



const Story = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const storyData = useSelector<State, Book>(
    (state) => state?.books?.book || {}
  );
  const loading = useSelector<State, boolean>(
    (state) => state.general.loading
  );

  const StoryWrapper = (props: Template): ReactElement => {
    const { storyData } = props;

    const Story = lazyWithRetryAndLoader(() =>
      import(`./Tamplate${storyData?.template || "0"}`)
    );




    return (

      <Story {...props} />

    );
  };

  useEffect(() => {
    dispatch(fetchBook(id))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log(storyData)
  return (
    <>
      {loading ? <Loader /> : <StoryWrapper storyData={storyData} />}

    </>
  )
}

export default Story