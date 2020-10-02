export const glory = () => {
  process.stdout.write('slava ukraine!')
  
  return () => {
    process.stdout.write('geroyam slava!')
  }
}