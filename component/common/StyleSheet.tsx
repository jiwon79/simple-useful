import { getCssText } from '@/stitches.config'

const StyleSheet = () => {
  return (
    <style id="stitches" dangerouslySetInnerHTML={{__html: getCssText()}}/>
  )
}

export default StyleSheet
