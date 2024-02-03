import { MarvellousChkPipe } from './marvellous-chk.pipe';

describe('MarvellousChkPipe', () => {
  it('check Prime using pipe',()=>{
    const obj=new MarvellousChkPipe();
    const result=obj.transform(11,"Prime");
    expect(result).toContain("It is a prime Number");
  })
  it('check Perfect using pipe',()=>{
    const obj=new MarvellousChkPipe();
    const result =obj.transform(11,"Perfect");
    expect(result).toContain("It is not a perfect number");
  })

  it('check Even using pipe',()=>{
    const obj=new MarvellousChkPipe();
    const result=obj.transform(11,"Even");
    expect(result).toContain("It is not even number");
  })

  it('check Odd using pipe',()=>{
    const obj=new MarvellousChkPipe();
    const result=obj.transform(11,"Odd");
    expect(result).toContain("It is odd number");
  })
});
